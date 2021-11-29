import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class FoodMigration1638159607312 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'food',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'originId',
            type: 'int',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: Date(),
          },
          {
            name: 'updated_at',
            type: Date(),
          },
          {
            name: 'deleted_at',
            type: Date(),
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'food',
      new TableForeignKey({
        columnNames: ['originId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'origin',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('food');
    const foreignKey = table.foreignKeys.find((fk) =>
      fk.columnNames.includes('originId'),
    );
    queryRunner.dropForeignKey('food', foreignKey);
    queryRunner.dropTable('food');
  }
}
