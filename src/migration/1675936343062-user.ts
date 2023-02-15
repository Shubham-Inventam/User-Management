import { MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm"

export class user1675936343062 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
        }), true)


        await queryRunner.createForeignKey(
            "user",
             new TableForeignKey({
                columnNames:["city_id"],
                referencedTableName:"city",
                referencedColumnNames:["city_id"]
             })
        )

        await queryRunner.createForeignKey(
            "user",
             new TableForeignKey({
                columnNames:["state_id"],
                referencedTableName:"state",
                referencedColumnNames:["state_id"]
             })
        )

        await queryRunner.createForeignKey(
            "user",
             new TableForeignKey({
                columnNames:["country_id"],
                referencedTableName:"country",
                referencedColumnNames:["country_id"]
             })
        )

        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")

    }

}