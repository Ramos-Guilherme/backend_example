import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1641254606528 implements MigrationInterface {
    private tabela: Table = new Table({
        name: 'users',
        columns:[
            {
                name:'uid',
                type: 'uuid',
                isPrimary: true,
                isNullable: false
            },
            {
                name:'name',
                type: 'varchar',
                length: '100',
                isNullable: false
            },
            /* {
                name:'cpf',
                type: 'varchar',
                length: '11',
                isNullable: false
            }, */
            {
                name:'email',
                type: 'varchar',
                length: '100',
                isNullable: false
            },
            {
                name:'birthdate',
                type: 'timestamp',
                isNullable: false
            },
            {
                name:'created_at',
                type: 'timestamp',
                isNullable: false
            },
            {
                name:'updated_at',
                type: 'timestamp',
                isNullable: false
            }
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.tabela);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tabela);
    }

}
