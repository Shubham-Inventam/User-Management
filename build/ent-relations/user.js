"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const typeorm_1 = require("typeorm");
const city_1 = require("./city");
const country_1 = require("./country");
const state_1 = require("./state");
let user = class user extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], user.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user.prototype, "fname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user.prototype, "lname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], user.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => city_1.city, (city) => city.city_id),
    (0, typeorm_1.JoinColumn)({ name: "city_id" }),
    __metadata("design:type", city_1.city)
], user.prototype, "city_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => state_1.state, (state) => state.state_id),
    (0, typeorm_1.JoinColumn)({ name: "state_id" }),
    __metadata("design:type", state_1.state)
], user.prototype, "state_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => country_1.country, (country) => country.country_id),
    (0, typeorm_1.JoinColumn)({ name: "country_id" }),
    __metadata("design:type", country_1.country)
], user.prototype, "country_id", void 0);
user = __decorate([
    (0, typeorm_1.Entity)("user")
], user);
exports.user = user;
