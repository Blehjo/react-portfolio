import Application from './Application'

export default function ApplicationList({ data }) {
    return (
        <div>
            {data.map(
                (application, index) => {
                    return <Application key={index} application={application}/>
                }
            )}
        </div>
    )
}