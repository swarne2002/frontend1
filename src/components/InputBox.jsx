export function InputBox({placeholder,lebel,onChange}){
    return <div className="p-1">
        <div className="p-2 text-left font-bold">{lebel} </div>
        <input onChange={onChange} className="border rounded w-full border-stone-300 p-1" type="text" placeholder={placeholder}/>
    </div>
}