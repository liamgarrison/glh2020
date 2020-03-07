import React, {useState} from 'react';

import LiveInCouncilHome from './questions/LiveInCouncilHome'
import LiveInEngland from './questions/LiveInEngland'
import Details from './questions/Details'
import DamageCost from './questions/DamageCost'
import DoesLandlordKnow from './questions/DoesLandlordKnow'
import RightToRepair from './questions/RightToRepair'
import PleaseContactLandlord from './questions/PleaseContactLandlord'
import HasLandlordStartedProceedings from './questions/HasLandlordStartedProceedings'
import FollowProceedings from './questions/FollowProceedings'
import DamagePersonalInjury from './questions/DamagePersonalInjury'

const questionMapping = {
  LiveInCouncilHome,
  LiveInEngland,
  Details,
  DamageCost,
  DoesLandlordKnow,
  RightToRepair,
  PleaseContactLandlord,
  HasLandlordStartedProceedings,
  FollowProceedings,
  DamagePersonalInjury
}

export default function App () {

  const [question, setQuestion] = useState('LiveInEngland');
  const [questionData, setQuestionData] = useState({
    name: ''
  })

  const updateResponse = (path, value) => {
    setQuestionData({
      ...questionData,
      [path]: value
    })
  }
  
  const Component = questionMapping[question];

  console.table(questionData)
  
  return (
    <Component 
      setQuestion={setQuestion}
      questionData={questionData}
      updateResponse={updateResponse}
      responses={questionData}
    />
  )
}
