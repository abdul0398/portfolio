import Left from "./left/Left"
import Right from "./right/Right"

const Bio = () => {
  return (
    <div className="w-full flex mt-5 flex-col md:flex-row lg:flex-row">
        <Left></Left>
        <Right></Right>
    </div>
  )
}

export default Bio