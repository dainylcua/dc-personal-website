type Props = {
  reverse?: boolean
}

export default function ExperienceCard(props: Props) {
  const { reverse } = props
  return(
    <div className={`${ reverse ? `lg:items-end lg:self-end lg:text-end` : `` } flex flex-col bg-stone-200 lg:bg-transparent text-stone-900 p-2 w-full lg:w-fit shadow-2xl shadow-stone-900 my-4 rounded-md relative`}>
      <div className="invisible lg:visible absolute inset-0.5 bg-gradient-to-br from-orange-500 to-rose-500 rounded-md blur opacity-50" />
      <div className="relative bg-stone-200 w-fit p-4 rounded-md">
        <p className="text-xl font-semibold">Time</p>
        <h3 className="text-3xl font-bold">Company</h3>
        <p className="text-xl font-semibold">Position</p>
        <ul className="list-disc list-inside marker:text-orange-500">
          <li>Led a team</li>
          <li>Hunted monsters</li>
          <li>Here's long text that goes forever lorem ipsum lorem ipsum</li>
        </ul>
      </div>
      <div className={`${ reverse ? `lg:-left-40 md:-right-40 lg:justify-end` : `md:-right-40` } top-4 lg:absolute bg-gradient-to-br from-orange-500 to-rose-500 px-6 py-2  shadow-xl shadow-orange-900/50 lg:w-80 flex rounded-md`}>
        <div className={`${ reverse ? `lg:justify-end` : `` } flex flex-col`}>
          <div>
            Icon
          </div>
          <p>
            Skill name 
          </p>
        </div>
      </div>
    </div>
  )
}