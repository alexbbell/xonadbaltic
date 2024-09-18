export interface IProduct {
    title: string,
    description: string,

}

export const vitamins: IProduct[] = [
    { title: 'A', description: 'Fat-soluble'    },
    { title: 'B<sub>1</sub>', description: 'Water-soluble' },
    { title: 'B<sub>2</sub>', description: 'Water-soluble' },
    { title: 'B<sub>6</sub>', description: 'Water-soluble' },
    { title: 'B<sub>12</sub>', description: 'Water-soluble' },
    { title: 'C', description: 'Water-soluble' },
    { title: 'D<sub>3</sub>', description: 'Water-soluble' },
    { title: 'E', description: 'Fat-soluble' },
    { title: 'K', description: 'Fat-soluble' },
    { title: 'Biotin', description: 'Fat-soluble' },
    { title: 'Pantothenic acid (B<sub>5</sub>)', description: 'Water-soluble' },
    { title: 'Niacin', description: 'Water-soluble' },
    { title: 'Folic acid (B<sub>9</sub>)', description: 'Water-soluble' }
]

export const minerals: IProduct[] = [
    { title: 'Iodine', description: 'It finds a favour as a non-toxic radiocontrast material.' },
    { title: 'Calcium', description: '' },
    { title: 'Manganese', description: '' },
    { title: 'Copper', description: '' },
    { title: 'Zinc', description: '' }
]





export const prebiotics: IProduct[] = [
    { title: 'Inulin', description: '' },

]

