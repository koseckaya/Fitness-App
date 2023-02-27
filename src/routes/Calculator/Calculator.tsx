
import { FC, useState, useCallback } from "react";
import { Container } from "../../components/Container";
import { getNutrients } from "../../Services/apiService";
import "./Calculator.scss";
import video from '../../assets/video.mp4'
import { demoRecipeData, ITotalData } from "./demoRecipeData";

export type Props = {
    className?: string;
};

const Calculator: FC<Props> = ({ className }: Props) => {
    const [items, setItems] = useState(demoRecipeData);
    const [productName, setName] = useState("");
    const [weight, setWeight] = useState(0);
    const [editingWeight, setEditingWeight] = useState(0);
    const [isEditing, setIsEditing] = useState(0);
    const [error, setError] = useState("");

    const handleDelete = useCallback(
        (e: React.MouseEvent) => {
            const targ = e.target as HTMLButtonElement;
            const id = Number(targ.getAttribute("data-id"));
            const newItems = items.filter((i) => i.id !== id);
            setItems(newItems);
        },
        [setItems, items]
    );
    const validForm = useCallback(() => {
        if (productName.length < 2) {
            setError('Product Name is too short')
            return false
        }
        if (+weight < 1) {
            setError('Product Weight must be greater than 1')
            return false
        }
        if (+weight > 5000) {
            setError('Product weight must be less than 5000')
            return false
        }
        return true
    }, [setError, weight, productName])

    const handleAdd = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            const searchStr = `${weight}g ${productName}`;
            if (!validForm()) {
                return
            } 

            getNutrients(searchStr).then((data) => {
                if (Object.keys(data.totalDaily).length === 0) {
                    setError("Invalid product");
                } else {
                    let newId;
                    let lastItem = items[items.length - 1]
                    if (items.length !== 0 && lastItem.id) {
                        newId = lastItem.id + 1
                    } else {
                        newId = 1;
                    }
                    // let newId =
                    //     items.length === 0 ? 1 : items[items.length - 1].id + 1;
                    const newItem = {
                        id: newId,
                        title: productName,
                        weight: weight,
                        ...data,
                    };
                    setItems([...items, newItem]);
                    setName("");
                    setWeight(0);
                    setError("");
                }
            });
        },
        [productName, weight, items, setError, setItems, setName, setWeight]
    );

    const handleNameChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value;
            setName(value);
        },
        [setName]
    );

    const handleWeightChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            let value = Number(e.target.value);
           
             if (value < 1) {
                setError("Invalid weight");
            } else {
                setWeight(value);
            }
        },
        [setWeight, setError]
    );

    const handleEditStart = useCallback(
        (e: React.MouseEvent) => {
            const targ = e.target as HTMLButtonElement;
            const id = Number(targ.getAttribute("data-id"));
            const itemWeight = items.filter((i) => i.id === +id)[0].weight || 0;
            setIsEditing(id);
            setEditingWeight(itemWeight);
        },
        [items, setEditingWeight, setIsEditing]
    );

    const handleEditSave = useCallback(
        (e: React.MouseEvent) => {
            const currentItem = items.filter((i) => i.id === isEditing)[0];
            const searchStr = `${editingWeight}g ${currentItem.title}`;
            getNutrients(searchStr).then((data) => {
                const newItems = items.map((i) => {
                    if (i.id === isEditing) {
                        return {
                            ...i,
                            ...data,
                            weight: editingWeight,
                        };
                    } else {
                        return i;
                    }
                });
                setItems(newItems);
                setIsEditing(0);
            });
        },
        [editingWeight, isEditing, setIsEditing, items]
    );

    const handleEditWeightChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const val = e.target.value;
            if (+val < 1) {
                setError("Invalid weight");
            } else {
               setEditingWeight(+val); 
            }
            
        },
        [setError, setEditingWeight]
    );
    
    const totalData: ITotalData = items.reduce((acc, item) => {
        acc.totalCalories = acc.totalCalories >= 0 ? acc.totalCalories + item.calories : item.calories;
        acc.dailyPotassium = acc.dailyPotassium >= 0 ? acc.dailyPotassium + item.totalDaily.K.quantity : item.totalDaily.K.quantity;
        acc.potassium = acc.potassium >= 0 ? acc.potassium + item.totalNutrients.K.quantity : item.totalNutrients.K.quantity;
        acc.dailyCalcium = acc.dailyCalcium >= 0 ? acc.dailyCalcium + item.totalDaily.CA.quantity : item.totalDaily.CA.quantity;
        acc.calcium = acc.calcium >= 0 ? acc.calcium + item.totalNutrients.CA.quantity : item.totalNutrients.CA.quantity;
        acc.dailyVitD = acc.dailyVitD >= 0 ? acc.dailyVitD + item.totalDaily.VITD.quantity : item.totalDaily.VITD.quantity;
        acc.VitD = acc.VitD >= 0 ? acc.VitD + item.totalNutrients.VITD.quantity : item.totalNutrients.VITD.quantity;
        acc.dailyProt = acc.dailyProt >= 0 ? acc.dailyProt + item.totalDaily.PROCNT.quantity : item.totalDaily.PROCNT.quantity;
        acc.prot = acc.prot >= 0 ? acc.prot + item.totalNutrients.PROCNT.quantity : item.totalNutrients.PROCNT.quantity;
        acc.dailyCarb = acc.dailyCarb >= 0 ? acc.dailyCarb + item.totalDaily.CHOCDF.quantity : item.totalDaily.CHOCDF.quantity;
        acc.carb = acc.carb >= 0 ? acc.carb + item.totalNutrients.CHOCDF.quantity : item.totalNutrients.CHOCDF.quantity;
        acc.dailySodium = acc.dailySodium >= 0 ? acc.dailySodium + item.totalDaily.NA.quantity : item.totalDaily.NA.quantity;
        acc.sodium = acc.sodium >= 0 ? acc.sodium + item.totalNutrients.NA.quantity : item.totalNutrients.NA.quantity;
        acc.dailyCholest = acc.dailyCholest >= 0 ? acc.dailyCholest + item.totalDaily.CHOLE.quantity : 0;
        acc.cholest = acc.cholest >= 0 ? acc.cholest + item.totalNutrients.CHOLE.quantity : item.totalNutrients.CHOLE.quantity;
        acc.dailyFat = acc.dailyFat >= 0 ? acc.dailyFat + item.totalDaily.FAT.quantity : item.totalDaily.FAT.quantity;
        acc.fat = acc.fat >= 0 ? acc.fat + item.totalNutrients.FAT.quantity : item.totalNutrients.FAT.quantity;
        acc.dailyIron = acc.dailyIron >= 0 ? acc.dailyIron + item.totalDaily.FE.quantity : item.totalDaily.FE.quantity;
        acc.iron = acc.iron >= 0 ? acc.iron + item.totalNutrients.FE.quantity : item.totalNutrients.FE.quantity;
        acc.sugar = acc.sugar >= 0 ? acc.sugar + item.totalNutrients.SUGAR.quantity : item.totalNutrients.SUGAR.quantity;
      
        return acc;
    }, {} as  ITotalData )

    Object.keys(totalData).forEach((item) => {
        const newValue = Number(totalData[item as keyof typeof totalData]).toFixed(1)
        totalData[item as keyof typeof totalData] = +newValue
    })

    return (
       <>
            <div className="videoContainer">
                <video className='videoTag' autoPlay loop muted>
                        <source src={video} type='video/mp4' />
                </video>
            </div>
        <Container className="calculator-container">
            <div className="calc">
                <h3 className="calc__title">
                    Try Our Recipe Nutrition Calculator
                </h3>
               
                <div className="calc__forms">
                    <div className="calc__form">
                        <form className="form-calculator">
                            <input
                                className="form__name"
                                type="text"
                                placeholder="Product Name"
                                value={productName}
                                onChange={handleNameChange}
                            />
                            <input
                                className="form__weight"
                                type="number"
                                placeholder="Weight in grams"
                                value={weight}
                                onChange={handleWeightChange}
                            />
                            <input
                                className="button form__btn"
                                type="submit"
                                value="Add"
                                onClick={handleAdd}
                            />
                        </form>
                        { !!error.length && (<div className="calc__error">{ error }</div>)}
                        <div className="form__list">
                            {items.map((item) => {
                                return (
                                    <div className="list__item" key={item.id}>
                                        {isEditing === item.id ? (
                                            <input
                                                className="form__editing"
                                                type="number"
                                                value={editingWeight}
                                                onChange={
                                                    handleEditWeightChange
                                                }
                                            />
                                        ) : (
                                            <div className="list__weight">
                                                {item.weight} g
                                            </div>
                                        )}

                                        <div className="list__title">
                                            {item.title}
                                        </div>
                                        <div className="list__nutrition">
                                            <span className="list__nutrition_prot">
                                               Protein:
                                                {item.totalNutrients.PROCNT.quantity.toFixed(1)}
                                            </span>
                                            <span className="list__nutrition_fat">
                                                Fat:
                                                {item.totalNutrients.FAT.quantity.toFixed(1)}
                                            </span>
                                            <span className="list__nutrition_carb">
                                                Carb:
                                                {item.totalNutrients.CHOCDF.quantity.toFixed(1)}
                                            </span>
                                            <span className="list__kkal">
                                                {item.calories} kkal
                                            </span>
                                        </div>
                                        
                                        <div className="list__controls">
                                            {isEditing === item.id ? (
                                                <div
                                                    className="list__save"
                                                    data-id={item.id}
                                                    onClick={handleEditSave}
                                                >
                                                   ✔️
                                                </div>
                                            ) : (
                                                <div
                                                    className="list__edit"
                                                    data-id={item.id}
                                                    onClick={handleEditStart}
                                                >
                                                   ✏️
                                                </div>
                                            )}

                                            <div
                                                className="list__delete"
                                                data-id={item.id}
                                                onClick={handleDelete}
                                            >
                                                ❌
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {items.length === 0 && (
                            <div className="">Add products to the List</div>
                        )}
                    </div>
                    <div className="calc__analysis">
                        <h3 className="analysis__title">Nutrition Facts</h3>
                        <div className="analysis__kkal">
                            <span>Total Calories</span>
                            <span>{totalData.totalCalories}</span>
                        </div>
                        <div className="analysis__text">% Daily Value*</div>
                        <div className="analysis__fat">
                            <span>Total Fat {totalData.fat}g</span>
                            <span>{totalData.dailyFat}%</span>
                        </div>
                        <div className="analysis__cholest">
                            <span>Cholesterol {totalData.cholest} mg</span>
                            <span>{totalData.dailyCholest}%</span>
                        </div>
                        <div className="analysis__sodium">
                            <span>Sodium {totalData.sodium} mg</span>
                            <span>{totalData.dailySodium}% </span>
                        </div>
                        <div className="analysis__carb">
                            <span>Total Carbohydrate {totalData.carb} g</span>
                            <span>{totalData.dailyCarb}%</span>
                        </div>
                        <div className="analysis__sugar">
                            <span>Total Sugars {totalData.sugar} g</span>
                        </div>
                        <div className="analysis__prot">
                            <span>Protein {totalData.prot} g</span>
                            <span>{totalData.dailyProt}%</span>
                        </div>
                        <div className="analysis__vitamins">
                            <div className="analysis__vitD">
                                <span>Vitamin D {totalData.VitD} µg</span>
                                <span>{totalData.dailyVitD}%</span>
                            </div>
                            <div className="analysis__calcium">
                                <span>Calcium {totalData.calcium} mg</span>
                                <span>{totalData.dailyCalcium}%</span>
                            </div>
                            <div className="analysis__iron">
                                <span>Iron {totalData.iron} mg</span>
                                <span>{ totalData.dailyIron}%</span>
                            </div>
                            <div className="analysis__potass">
                                <span>Potassium {totalData.potassium}mg</span>
                                <span>{totalData.dailyPotassium}%</span>
                            </div>
                        </div>
                        <div className="analysis__desc">
                            *The % Daily Value (DV) tells you how much a
                            nutrient in a food serving contributes to a daily
                            diet. 2,000 calorie a day is used for general
                            nutrition advice.
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </>
    );
};

export default Calculator;
