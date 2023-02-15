"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user1675936343062 = void 0;
const typeorm_1 = require("typeorm");
class user1675936343062 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "user",
                columns: [
                    {
                        name: "user_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "fname",
                        type: "varchar",
                    },
                    {
                        name: "lname",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "int",
                    },
                    {
                        name: "city_id",
                        type: "int",
                    },
                    {
                        name: "state_id",
                        type: "int",
                    },
                    {
                        name: "country_id",
                        type: "int",
                    }
                ]
            }), true);
            yield queryRunner.createForeignKey("user", new typeorm_1.TableForeignKey({
                columnNames: ["city_id"],
                referencedTableName: "city",
                referencedColumnNames: ["city_id"]
            }));
            yield queryRunner.createForeignKey("user", new typeorm_1.TableForeignKey({
                columnNames: ["state_id"],
                referencedTableName: "state",
                referencedColumnNames: ["state_id"]
            }));
            yield queryRunner.createForeignKey("user", new typeorm_1.TableForeignKey({
                columnNames: ["country_id"],
                referencedTableName: "country",
                referencedColumnNames: ["country_id"]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("user");
        });
    }
}
exports.user1675936343062 = user1675936343062;
