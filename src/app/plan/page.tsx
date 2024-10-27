export default function Page () {
  return (
    <div className="max-w-lg mx-auto">

      <div className="card bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <h1 className="text-center font-bold mb-3">Personalized health plan generated by AI</h1>
          <div className="radial-progress mx-auto" style={{ "--value": 75 }} role="progressbar">
            70%
          </div>
          <ul className="steps steps-vertical">
            <li className="step step-primary">Preliminary AI addiction assessment</li>
            <li className="step step-primary">Learn about opioid addiction</li>
            <li className="step">Develop employable skillsets</li>
            <li className="step">Develop your CV and resume for jobs</li>
            <li className="step">Send out CV and resume for jobs</li>
          </ul>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl mb-5">
        <div className="card-body">
          <h1 className="text-center font-bold mb-3">Staying Clean Record</h1>
          <p className="mb-3 text-center text-xl">Congratulations on staying clean for <span className="text-purple-500 underline">45</span> days straight! &#127881;</p>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max mx-auto">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value":15}}></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value":10}}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{"--value":24}}></span>
              </span>
              min
            </div>
          </div>
          <div className="text-center"> to next stay clean milestone!</div>
        </div>
      </div>
    </div>
  )
}