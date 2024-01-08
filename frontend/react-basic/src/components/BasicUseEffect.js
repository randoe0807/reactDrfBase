import React, {useState, useEffect} from 'react'
// useEffectはコンポーネントが最初に呼び出されたときや、一回だけ呼び出したいときに使う
const BasicUseEffect = () => {
    const [count, setCount] = useState(0)
	// 第2引数に[]を渡すと、最初に呼び出されたときだけ実行される
		useEffect(() => {
			console.log("useEffect in invoked")
		}, [])

  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count}</button>
			</div>
  )
}

export default BasicUseEffect