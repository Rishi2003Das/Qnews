import './component2.css'

function Component3(props) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <div className='inside'><img src={props.article.urlToImage}/>
<h2>{props.article.title}</h2>
<a className="readMore"href={props.article.url} rel='nofollow'>readmore</a>

    </div>
  )
}
export default Component3