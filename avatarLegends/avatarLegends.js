import { avatarLegends } from "./module/config.js";
import avatarLegendsItemSheet from "./module/sheets/avatarLegendsItemSheet.js";

Hooks.once("init", function () {
    console.log("Avatar Legends | Initialising Avatar Legends System");

    CONFIG.avatarLegends = avatarLegends;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("avatarLegends", avatarLegendsItemSheet, { makeDefault: true });
});