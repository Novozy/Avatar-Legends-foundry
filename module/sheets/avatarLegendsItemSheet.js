export default class avatarLegendsItemSheet extends ItemSheet {

    get template() {
        return `systems/avatarLegends/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.avatarLegends;

        return data;
    }
}