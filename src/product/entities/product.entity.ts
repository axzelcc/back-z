import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column({type: 'int'})
    stock: number;

    @Column({type: 'decimal'})
    price: number;

    
}
