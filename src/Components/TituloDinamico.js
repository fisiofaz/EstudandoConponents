class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        
        // base do Componente
        const componetBoot = document.createElement('h1');
        componetBoot.textContent = this.getAttribute('titulo');

        //estilizar o componente
        const style = document.createElement('style');
        style.textContent = `
            h1 {
                color: red;
            }
        `;

        //Enviar para o shadow
        shadow.appendChild(componetBoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);