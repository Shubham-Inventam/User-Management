import { MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm"

export class state1676285366381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "state",
            columns: [
                {
                    name: "state_id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "state_name",
                    type: "varchar",
                },
            ]
        }), true)

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
