export default function Page () {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-center font-bold mb-3">Lessons Catalog</h1>

      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://people.com/thmb/emwt4HcwLC6yJYD8bl28ZJBo2ZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/drug-overdose-2-6599dce6b736463b825c1de98aefaec2.jpg"
            alt="Opioid Overdose" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">I overdosed! What should I do?</h2>
          <p>Learn more about how to cope with overdoses. Know where to look for resources and who you can approach for help.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}