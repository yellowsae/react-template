import { Button } from "antd"

import useCounterStore from "@/stores/counter"
import { useEffect } from "react"
import { testApi } from "@/api/testApi"

const Home = () => {

  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

  useEffect(() => {
    testApi.getData().then((res) => console.log(res))
  }, [])

  return (
    <div>
      <h1> Home Page </h1>
      <Button type="primary" onClick={() => increase(1)}>
        counter: {counter}
      </Button>
    </div>
  )
}

export default Home
