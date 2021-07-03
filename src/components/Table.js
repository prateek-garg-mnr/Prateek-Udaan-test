import React,{useState,useEffect} from 'react'

function Table({row,column}) {

    const [countR,setCountR] = useState(new Array(row).fill(0))
    const [countC,setCountC] = useState(new Array(column).fill(0))
    const [values,setValues] = useState({})
    const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]


    const generateId = (val)=>{
        let arr = val.toString().split("")
        // B,H
        let id = ""
        arr.forEach(val=>{
            id+=alphabets[Number(val)]
        })
        //BH
        return id
    }

    const handleChange=(e)=>{
        setValues((state)=>{
            let value = e.target.value
            let type = ""
            if(Number(value)){
                type = "number"
            } else {
                type = "exp"
            }
            
            return {...state,[e.target.id]:{value,type}}
        })
    }
    const focusChange =(e)=>{
        try{
            if(!Number(e.target.value)){
                const exp = e.target.value.split("+")
                let sum = 0
                console.log(exp)
                //A1,A2
                exp.forEach((val)=>{
                    const ele =values[val].value
                    if(Number(ele)){
                        sum+=Number(ele)
                    } else {
                        sum+=0
                    }
                })
                console.log( "sum value")
                console.log(sum)
                setValues((state)=>{
                    return {...state,[e.target.id]:{...state[e.target.id],value:sum}}
                })
            }
        } catch(e){

        }
        
       
    }
    return (
        
            <table>
                {
                    countR.map((val,i)=>{
                        let id = generateId(i)
                        return (
                            <tr key={i} id={id}>
                                {countC.map((val,j)=>{
                                    return (<td key={j}>
                                        <input type="text" id={id+j} onChange={handleChange} value={values[id+j]?values[id+j].value : ""} onBlur={focusChange}/>
                                    </td>)
                                })}
                                
                            </tr>
                        )
                    })
                }
            </table>
        
    )
}

export default Table
