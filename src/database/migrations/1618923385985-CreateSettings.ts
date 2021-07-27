import { settings } from "node:cluster";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618923385985 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "settings",
                    columns:[{
                        name:"id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name:"chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }]
                })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings")
    }
    /**
     * para executar os migratios, usaremos o comando:
     * npm run typeorm migration:run
     */
}
