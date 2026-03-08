class IndicatorCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'indicator-card');

        const header = document.createElement('div');
        header.setAttribute('class', 'card-header');

        const icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.textContent = this.getAttribute('icon') || '❓'; 

        const title = document.createElement('span');
        title.setAttribute('class', 'title');
        title.textContent = this.getAttribute('title') || 'Indicator';

        header.appendChild(icon);
        header.appendChild(title);

        const value = document.createElement('div');
        value.setAttribute('class', 'card-value');
        value.textContent = this.getAttribute('value') || 'N/A';

        const footer = document.createElement('div');
        footer.setAttribute('class', 'card-footer');
        footer.textContent = this.getAttribute('footer') || 'Last updated: now';

        const style = document.createElement('style');
        style.textContent = `
            .indicator-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                padding: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                transition: transform 0.2s;
            }
            .indicator-card:hover {
                transform: translateY(-5px);
            }
            .card-header {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }
            .card-header .icon {
                font-size: 2em;
                margin-right: 15px;
                color: #005A9C;
            }
            .card-header .title {
                font-size: 1.5em;
                font-weight: bold;
                color: #005A9C;
            }
            .card-value {
                font-size: 2.5em;
                font-weight: bold;
                text-align: center;
                margin-bottom: 15px;
            }
            .card-footer {
                text-align: right;
                font-size: 0.9em;
                color: #666;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(header);
        wrapper.appendChild(value);
        wrapper.appendChild(footer);
    }
}

customElements.define('indicator-card', IndicatorCard);

const indicators = [
    {
        icon: '📈',
        title: 'GDP Growth Rate',
        value: '2.5%',
        footer: 'Q2 2023'
    },
    {
        icon: '📉',
        title: 'Inflation Rate',
        value: '3.2%',
        footer: 'July 2023'
    },
    {
        icon: '💼',
        title: 'Unemployment Rate',
        value: '3.8%',
        footer: 'August 2023'
    },
    {
        icon: '💰',
        title: 'Consumer Price Index (CPI)',
        value: '310.5',
        footer: 'July 2023'
    },
    {
        icon: '🏠',
        title: 'Housing Starts',
        value: '1.45M',
        footer: 'July 2023'
    },
    {
        icon: '💪',
        title: 'Consumer Confidence',
        value: '106.1',
        footer: 'August 2023'
    },
];

const container = document.getElementById('indicators-container');

indicators.forEach(indicator => {
    const card = document.createElement('indicator-card');
    card.setAttribute('icon', indicator.icon);
    card.setAttribute('title', indicator.title);
    card.setAttribute('value', indicator.value);
    card.setAttribute('footer', indicator.footer);
    container.appendChild(card);
});
