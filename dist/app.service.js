"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let AppService = class AppService {
    async getHello(country) {
        const { data } = await axios_1.default.get(`https://firms.modaps.eosdis.nasa.gov/api/area/csv/c084601db76fadfc8725e0c1bae5598d/MODIS_NRT/world/${country}/2023-10-08`);
        const lines = data.split('\n');
        lines.shift();
        const lines2 = lines.map(row => {
            const columns = row.split(",");
            console.log(columns[0], columns[1]);
            return {
                latitude: columns[0],
                longitude: columns[1]
            };
        });
        return lines2;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map