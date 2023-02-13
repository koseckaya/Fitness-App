//@ts-nocheck
import { FC, useState, useCallback } from 'react';
import { Container } from '../../components/Container';
import './Calculator.scss';


interface ItemType  {
    id: number;
    title: string;
    weight: number;
    protein?: number;
    fat?: number;
    carb?: number;
    calories?: number;
}


export type Props = {
    className?: string;
};
const demoItems:ItemType[] = [{
        id: 1,
        title: 'Sugar',
        weight: 150,
        protein: 0,
        fat: 0,
        carb: 95,
        calories: 100
}, {
        id: 2,
        title: 'Eggs',
        weight: 220,
        protein: 0,
        fat: 0,
        carb: 95,
        calories: 100
    }, {
        id: 3,
        title: 'Flour',
        weight: 1330,
        protein: 0,
        fat: 0,
        carb: 95,
        calories: 100
    }, {
        id: 4,
        title: 'Apples',
        weight: 1000,
        protein: 0,
        fat: 0,
        carb: 95,
        calories: 100
}]

const Calculator: FC<Props> = ({ className }: Props) => {

    const [items, setItems] = useState(demoItems)
    const [productName, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [editingWeight, setEditingWeight] = useState(0);
    const [isEditing, setIsEditing] = useState(0);

    const handleDelete = useCallback((e: React.MouseEvent) => {
        const targ = e.target as HTMLButtonElement
        const id = Number(targ.getAttribute('data-id'))
        const newItems = items.filter((i) => i.id !== id)
        setItems(newItems)
    },[setItems, items])

    const handleAdd = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        const newId = items[items.length - 1].id + 1
        const newItem = {
            id: newId,
            title: productName,
            weight: weight,
        }
        setItems([...items, newItem])
        setName('')
        setWeight(0)

    }, [productName, weight,items])
    
    const handleNameChange = useCallback((e:  React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        setName(value)
    }, [setName])

    const handleWeightChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value)
        setWeight(value)
    }, [setWeight])

   const handleEditStart = useCallback((e: React.MouseEvent) => {
        const targ = e.target as HTMLButtonElement
       const id = Number(targ.getAttribute('data-id'))
       const itemWeight = items.filter(i => i.id === +id)[0].weight
       setIsEditing(id)
       setEditingWeight(itemWeight)
      
   }, [ items, setEditingWeight, setIsEditing])
    
    const handleEditSave = useCallback((e: React.MouseEvent) => {
       const targ = e.target as HTMLButtonElement
        const id = Number(targ.getAttribute('data-id'))
        const newItems = items.map(i => {
            if (i.id === isEditing) {
                i.weight = editingWeight
            }
            return i
        })
        setItems(newItems)
        setIsEditing(0)
        setEditingWeight(0)

   }, [setItems, isEditing, editingWeight, items])
    
    const handleEditWeightChange = useCallback((e:  React.ChangeEvent<HTMLInputElement>) => { 
        const val = e.target.value
        setEditingWeight(+val)
    }, [])
    


    return (
    <Container>
        <div className="calc" >
            <h3 className="calc__title" >Try Our Recipe Nutrition Calculator</h3>
            <div className='calc__steps'>
                <div className='calc__step'>Step 1: Enter Your Ingredients</div>
                <div className='calc__step'>Step 2: Click on 'Analyze Recipe'</div>
                <div className='calc__step'>Step 3: Get Your Nutrition Facts Label</div>
            </div>
            <div className="calc__form" >
                <form className='form' >
                    <input className='form__name' type='text' placeholder='Product Name'
                        value={productName } onChange={handleNameChange} />
                    <input className='form__weight' type='number' placeholder='Weight in grams'
                            value={weight} onChange={handleWeightChange}    />
                    <input className='button form__btn' type='submit' value='Add' onClick={handleAdd} />
                </form>
                <div className='form__list'>
                        {items.map(item => {
                            return (
                                <div className='list__item' key={item.id}>
                                    {isEditing === item.id ? (
                                      <input className='form__weight' type='number'
                                            value={editingWeight} onChange={handleEditWeightChange} />  
                                    ) : (
                                        <div className='list__weight'>{item.weight} g</div>    
                                    )
                                    }
                                    
                                    <div className='list__title'>{item.title}</div>
                                    <div className='list__nutrition'>Protein: {item.protein}
                                        Fat: {item.fat}  Carb: {item.carb}</div>
                                    <div className='list__kkal'>{item.calories} kkal</div>
                                    <div className="list__controls">
                                        {isEditing === item.id ? (
                                            <div className = "list__save" data-id={item.id}  onClick={handleEditSave}>save</div>
                                        ) : (
                                            <div className="list__edit" data-id={item.id}  onClick={handleEditStart}>⭮</div>
                                        )}
                                        
                                        <div className="list__delete" data-id={item.id} onClick={handleDelete}>❌</div>
                                    </div>
                                </div>
                            )
                        }) }   
                    </div>
                    {items.length === 0 ? <div className=''>Add products to the List</div> : 
                        <div className='button'>Calculate recipe</div>}
            </div>
        </div>

    </Container>
  
)};

export default Calculator;
