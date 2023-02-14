//@ts-nocheck
import { FC, useState, useCallback } from 'react';
import { Container } from '../../components/Container';
import { getNutrients } from '../../Services/apiService';
import './Calculator.scss';
import {demoRecipeData} from './demoRecipeData'


export type Props = {
    className?: string;
};
const DAILY_CALORIES = 2000;

const Calculator: FC<Props> = ({ className }: Props) => {

    const [items, setItems] = useState(demoRecipeData)
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
        const searchStr = `${weight}g ${productName}`
        getNutrients(searchStr).then((data) => {
            console.log('data', data);
             let newId = items.length === 0 ?  1 : items[items.length - 1].id + 1
            const newItem = {
                id: newId,
                title: productName,
                weight: weight,
                ...data
            }
             setItems([...items, newItem])
        setName('')
        setWeight(0)
        })
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
        const currentItem= items.filter(i => i.id === isEditing)[0] 
        console.log('currentItem', currentItem);
        const searchStr = `${editingWeight}g ${currentItem.title}`
        getNutrients(searchStr).then((data) => {
            
            const newItems = items.map(i => {
                if (i.id === isEditing) {
                    return {
                        ...i, 
                        ...data,
                        weight: editingWeight,
                    }
                }
                else {
                    return i
                }
            })
            console.log('newItems', newItems);
            setItems(newItems)
            setIsEditing(0)
        })
   }, [editingWeight, isEditing, setIsEditing, items])
    
    const handleEditWeightChange = useCallback((e:  React.ChangeEvent<HTMLInputElement>) => { 
        const val = e.target.value
        setEditingWeight(+val)
    }, [])

    const totalCalories = items.reduce((acc, item) => acc += item.calories,0)
    const totalFat = (items.reduce((acc, item) => acc += item.totalNutrients.FAT.quantity, 0)).toFixed(1)
    const dailyFat = (items.reduce((acc, item) => acc += item.totalDaily.FAT.quantity, 0)).toFixed()
    const cholest = (items.reduce((acc, item) => acc += item.totalNutrients.CHOLE.quantity, 0)).toFixed(1)
    const dailyCholest = (items.reduce((acc, item) => acc += item.totalDaily.CHOLE.quantity, 0)).toFixed(0)
    const sodium = (items.reduce((acc, item) => acc += item.totalNutrients.NA.quantity, 0)).toFixed(1)
    const dailySodium = (items.reduce((acc, item) => acc += item.totalDaily.NA.quantity, 0)).toFixed(0)
    const totalCarb = (items.reduce((acc, item) => acc += item.totalNutrients.CHOCDF.quantity, 0)).toFixed(1)
    const dailyCarb = (items.reduce((acc, item) => acc += item.totalDaily.CHOCDF.quantity, 0)).toFixed(0)
    const sugar = (items.reduce((acc, item) => acc += item.totalNutrients.SUGAR.quantity, 0)).toFixed(1)
    const prot = (items.reduce((acc, item) => acc += item.totalNutrients.PROCNT.quantity, 0)).toFixed(1)
    const dailyProt = (items.reduce((acc, item) => acc += item.totalDaily.PROCNT.quantity, 0)).toFixed(0)
    const vitD = (items.reduce((acc, item) => acc += item.totalNutrients.VITD.quantity, 0)).toFixed(1)
    const dailyVitD = (items.reduce((acc, item) => acc += item.totalDaily.VITD.quantity, 0)).toFixed(0)
    const calcium = (items.reduce((acc, item) => acc += item.totalNutrients.CA.quantity, 0)).toFixed(1)
    const dailyCalcium = (items.reduce((acc, item) => acc += item.totalDaily.CA.quantity, 0)).toFixed(0)
    const potassium = (items.reduce((acc, item) => acc += item.totalNutrients.K.quantity, 0)).toFixed(1)
    const dailyCPotassium = (items.reduce((acc, item) => acc += item.totalDaily.K.quantity, 0)).toFixed(0)
    // const total = (items.reduce((acc, item) => {
    //     acc.dailyCPotassium = acc.dailyCPotassium ? acc.dailyCPotassium + item.totalDaily.K.quantity : 0;
            
    //     return acc;
    // }, {}))

    return (
    <Container>
        <div className="calc" >
            <h3 className="calc__title" >Try Our Recipe Nutrition Calculator</h3>
            <div className='calc__steps'>
                <div className='calc__step'><span>Step 1</span> Enter Your Ingredients</div>
                <div className='calc__step'><span>Step 2</span> Click on 'Analyze Recipe'</div>
                <div className='calc__step'><span>Step 3</span> Get Your Nutrition Facts Label</div>
            </div>
            <div className='calc__forms'>
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
                                        <div className='list__nutrition'>
                                            <span className='list__nutrition_prot'>   Protein:
                                                {(item.totalNutrients.PROCNT.quantity).toFixed(1)}
                                            </span>
                                            <span className='list__nutrition_fat'>   Fat:
                                                {(item.totalNutrients.FAT.quantity).toFixed(1)}
                                            </span>
                                            <span className='list__nutrition_carb'>   Carb:
                                                {(item.totalNutrients.CHOCDF.quantity).toFixed(1)} 
                                            </span>
                                        </div>
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
                        {items.length === 0 && ( <div className=''>Add products to the List</div>) }
                </div>
                <div className='calc__analysis'>
                        <h3 className='analysis__title'>Nutrition Facts</h3>
                        <div className='analysis__kkal'>
                            <span>Total Calories</span>
                            <span>{totalCalories}</span>
                        </div>
                        <div className='analysis__text'>% Daily Value*</div>
                        <div className='analysis__fat'>
                            <span>Total Fat {totalFat }g</span>
                            <span>{dailyFat}%</span>
                        </div>
                        <div className='analysis__cholest'>
                            <span>Cholesterol {cholest} mg</span>
                            <span>{dailyCholest}%</span>
                        </div>
                        <div className='analysis__sodium'>
                            <span>Sodium {sodium} mg</span>
                            <span>{dailySodium}% </span>
                        </div>
                        <div className='analysis__carb'>
                            <span>Total Carbohydrate {totalCarb} g</span>
                            <span>{dailyCarb}%</span>
                        </div>
                        <div className='analysis__sugar'>
                            <span>Total Sugars {sugar} g</span>
                        </div>
                        <div className='analysis__prot'>
                            <span>Protein {prot} g</span>
                            <span>{dailyProt}%</span>
                        </div>
                        <div className='analysis__vitamins'>
                            <div className='analysis__vitD'>
                                <span>Vitamin D {vitD } µg</span>
                                <span>{ dailyVitD}%</span>
                            </div>
                            <div className='analysis__calcium'>
                                <span>Calcium {calcium} mg</span>
                                <span>{dailyCalcium }%</span>
                            </div>
                            <div className='analysis__iron'>
                                <span>Iron  4mcg</span>
                                <span>18% {/* {item.totalDaily.FE.quantity} */}</span>
                            </div>
                            <div className='analysis__potass'>
                                <span>Potassium { potassium}mg</span>
                                <span>{ dailyCPotassium}%</span>
                            </div>
                        </div>
                        <div className='analysis__desc'>
                            *The % Daily Value (DV) tells you how much a nutrient in a food serving contributes to a daily diet. 2,000 calorie a day is used for general nutrition advice.
                        </div>
                </div>
            </div>
        </div>

    </Container>
  
)};

export default Calculator;
