import React from "react"
function useLocalStorage(itemName, initialValue) {
    // localStorage.removeItem("TODOS_V1");
// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'Tomar el curso de Intro a React.js', completed: false , likes:0},
//   { text: 'Llorar con la llorona', completed: false , likes:0},
//   { text: 'LaLaLaLaLa', completed: false , likes:0},
//   { text: 'jsjsjs', completed: false , likes:0},
//   { text: 'lo logramos jsjs', completed: true , likes:0}
// ]

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))

// localStorage.removeItem("TODOS_V1");

    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
            setTimeout(() => {
                try {
                    const localStorageItem = localStorage.getItem(itemName)
                    let parsedItem;
                    if (!localStorageItem) {
                        localStorage.setItem(itemName, JSON.stringify(initialValue))
                        parsedItem = initialValue
                    } else {
                        parsedItem = JSON.parse(localStorageItem);
                        setItem(parsedItem)
                    }
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                    setError(true)
                }
            }, 2000)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return {
        item, saveItem, loading, error
    }
}
export { useLocalStorage }