import ApplicationImages from './ApplicationImages';
import { PlayCircleFilled, GithubFilled } from '@ant-design/icons'

export default function Application ({ application }) {
    const { id, applicationTitle, applicationImage, applicationLink, github } = application
    return (
        <div>
            <h2>{applicationTitle}</h2>
            { applicationImage.length ? <ApplicationImages images={applicationImage}/> : <p>Currently No Photos</p>}
            <p><a href={applicationLink}><PlayCircleFilled/></a></p>
            <p><a href={github}><GithubFilled/></a></p>
        </div>
    )
}