import React, {useState} from 'react';

import LiveInCouncilHome from './qualification_questions/LiveInCouncilHome'
import LiveInEngland from './qualification_questions/LiveInEngland'
import Details from './qualification_questions/Details'
import DamageCost from './qualification_questions/DamageCost'
import DoesLandlordKnow from './qualification_questions/DoesLandlordKnow'
import RightToRepair from './qualification_questions/RightToRepair'
import PleaseContactLandlord from './qualification_questions/PleaseContactLandlord'
import HasLandlordStartedProceedings from './qualification_questions/HasLandlordStartedProceedings'
import FollowProceedings from './qualification_questions/FollowProceedings'
import DamagePersonalInjury from './qualification_questions/DamagePersonalInjury'
import Final from './qualification_questions/Final'

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
  DamagePersonalInjury,
  Final
}

export default function QualificationQuestionnaire ({onComplete}) {

  const [question, setQuestion] = useState('LiveInEngland');
  
  const Component = questionMapping[question];
  
  return (
    <Component 
      setQuestion={setQuestion}
      onComplete={onComplete}
    />
  )
}
