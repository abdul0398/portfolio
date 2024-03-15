import Left from "./left/Left"
import Right from "./right/Right"

const Bio = () => {
  return (
    <div className="w-full lg:w-3/4 mx-auto flex mt-40 flex-col md:flex-col lg:flex-row">
        <Left></Left>
        <Right></Right>
    </div>
  )
}

export default Bio