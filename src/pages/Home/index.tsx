import { Button } from "antd"

import useCounterStore from "@/stores/counter"

const Home: React.FC = () => {

  const counter = useCounterStore((state) => state.counter)
  const increase = useCounterStore((state) => state.increase)

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
