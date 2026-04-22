(function() {
      'use strict';

      /**
       * Cria uma roleta vertical dentro de um elemento container.
       * @param {HTMLElement} container - Elemento que receberá a roleta.
       * @param {Array} items - Lista de objetos { icon: string (SVG ou HTML), label: string }.
       * @param {number} pauseDuration - Tempo de pausa em milissegundos (padrão 2000).
       */
      function createSlotMachine(container, items, pauseDuration = 3000) {
        if (!container || !items || items.length === 0) return;

        // Duplicamos os itens para criar um loop contínuo sem "salto"
        const doubledItems = [...items, ...items];
        const itemHeight = 24; // Deve coincidir com a altura definida no CSS

        // Monta a estrutura interna
        const itemsWrapper = document.createElement('div');
        itemsWrapper.className = 'slot-items';

        doubledItems.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'slot-item';

          // Ícone (aceita string com SVG ou HTML)
          const iconSpan = document.createElement('span');
          iconSpan.className = 'slot-icon';
          iconSpan.innerHTML = item.icon; // Exemplo: '<svg ...>...</svg>'

          const labelSpan = document.createElement('span');
          labelSpan.className = 'slot-label';
          labelSpan.textContent = item.label;

          itemDiv.appendChild(iconSpan);
          itemDiv.appendChild(labelSpan);
          itemsWrapper.appendChild(itemDiv);
        });

        container.innerHTML = ''; // Limpa o container
        container.appendChild(itemsWrapper);

        // Estado atual
        let currentIndex = 0;
        const totalOriginalItems = items.length;
        let isAnimating = false;
        let timeoutId = null;

        // Aplica a transformação vertical sem transição (para resetar posição)
        function setPositionInstant(index) {
          itemsWrapper.style.transition = 'none';
          itemsWrapper.style.transform = `translateY(-${index * itemHeight}px)`;
          // Força reflow para garantir que a transição seja removida antes de reativar
          itemsWrapper.offsetHeight; 
          itemsWrapper.style.transition = '';
        }

        // Move para o próximo índice com transição suave
        function moveToNext() {
          if (isAnimating) return;
          isAnimating = true;

          // Se estamos no último item do conjunto original (índice = totalOriginalItems - 1),
          // estamos visualmente no último item. Para fazer o loop contínuo, vamos:
          // 1. Mover para a posição correspondente ao clone (índice + 1)
          // 2. Após a transição, resetar para o índice 0 sem animação
          const nextIndex = currentIndex + 1;
          
          itemsWrapper.style.transition = 'transform 0.35s cubic-bezier(0.2, 0.9, 0.4, 1)';
          itemsWrapper.style.transform = `translateY(-${nextIndex * itemHeight}px)`;

          // Quando a transição terminar
          const onTransitionEnd = () => {
            itemsWrapper.removeEventListener('transitionend', onTransitionEnd);
            
            // Se o próximo índice é o início dos clones (índice === totalOriginalItems)
            if (nextIndex === totalOriginalItems) {
              // Reset instantâneo para o índice 0 (primeiro item original)
              setPositionInstant(0);
              currentIndex = 0;
            } else {
              currentIndex = nextIndex;
            }
            
            isAnimating = false;
            
            // Agenda a próxima mudança após a pausa
            scheduleNext();
          };

          itemsWrapper.addEventListener('transitionend', onTransitionEnd, { once: true });
        }

        // Agenda o próximo movimento após a pausa
        function scheduleNext() {
          if (timeoutId) clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            moveToNext();
          }, pauseDuration);
        }

        // Inicializa a posição (índice 0)
        setPositionInstant(0);
        
        // Começa o ciclo: após a pausa inicial, move para o próximo
        scheduleNext();

        // Limpeza (caso o elemento seja removido, mas não obrigatório para o exemplo)
        return {
          stop: () => {
            if (timeoutId) clearTimeout(timeoutId);
            itemsWrapper.style.transition = 'none';
          }
        };
      }

      // --- EXEMPLO DE USO ---
      // Ícones SVG simples (24x24) - você pode substituir por qualquer HTML válido
      const icon1 = `
        <img width="24" height="24" class="icon" src="../media/icons/figma.webp">
      `;
      
      const icon2 = `
        <img width="24" height="24" class="icon" src="../media/icons/sketch.webp">
      `;
      
      const icon3 = `
        <img width="24" height="24" class="icon" src="../media/icons/adobexd.webp">
      `;

      const icon4 = `
        <img width="24" height="24" class="icon" src="../media/icons/lunacy.webp">
      `;

      const slotItems = [
        { icon: icon1, label: 'Figma' },
        { icon: icon2, label: 'Sketch' },
        { icon: icon3, label: 'Adobe XD' },
        { icon: icon4, label: 'Lunacy' }
      ];

      // Inicializa a roleta no elemento com id "SlotTools"
      const container = document.getElementById('SlotTools');
      if (container) {
        createSlotMachine(container, slotItems, 2000); // 2 segundos de pausa
      }

      // Exemplo adicional: você pode criar quantas quiser em outros lugares
      // const outroContainer = document.getElementById('outraRoleta');
      // createSlotMachine(outroContainer, outrosItens, 1500);
    })();