import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'

function Header(props) {
  const { index, title, description } = props
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-center">
        <p className=" text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400 ">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm::text-base mx-auto ">{description}</p>
    </div>
  )
}

export default function Generator() {
  const [showModal, setShowModal] = useState(false)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.length > 2) {
      return
    }
    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      return
    }
  }

  return (
    <SectionWrapper
      header={'generate your workout'}
      title={["It's", 'Gains', "o'clock"]}
    >
      <Header
        index={'01'}
        title={'Pick your poison'}
        description={'Select the workout you wish to use!'}
      />

      <div className="grid  grid-cols-2 sm:grid-cols-4 gap-4 ">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              className={
                'bg-slate-950 border border-blue-400 rounded-lg py-3 duration-200 hover:border-blue-600 ' +
                (type === poison ? 'border-blue-600' : 'border-blue-400 ')
              }
              onClick={() => {
                setPoison(type)
              }}
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll('_', ' ')}</p>
            </button>
          )
        })}
      </div>
      <Header
        index={'02'}
        title={'Lock On targets'}
        description={'Select the muscles to be used.'}
      />

      <div className=" bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col ">
        <button
          onClick={toggleModal}
          className="relative flex items-center justify-center p-3"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 "></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3 ">
            {(poison === 'individual'
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button key={muscleGroupIndex}>
                  <p className="">{muscleGroup}</p>
                </button>
              )
            })}
          </div>
        )}
      </div>
      <Header
        index={'03'}
        title={'Become Juggernaut'}
        description={'Select your desired training style. '}
      />

      <div className="grid  grid-cols-3 gap-4 ">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              className={
                'bg-slate-950 border border-blue-400 rounded-lg py-3 duration-200 hover:border-blue-600 ' +
                (scheme === goal ? 'border-blue-600' : 'border-blue-400 ')
              }
              onClick={() => {
                setGoal(scheme)
              }}
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll('_', ' ')}</p>
            </button>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
