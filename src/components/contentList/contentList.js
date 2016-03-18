import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classes from './contentList.scss'

export class contentList extends React.Component<void, Props, void> {
  constructor (Props) {
    super(Props)
  }
  render () {
    const article = this.props.articleList
    console.log('parentSenddata11', article)
    return (
      <div>
        {
          article.map((item, k) => {
            return (
              <div key={k} className={classes.contentListWrap}>
                <div className={classes['cell']}>
                    <img style={{float:'left'}} src={item.author.avatar_url} width='30' height='30' title={item.title} />
                  <div className={classes['pull-left']}>
                      {item.reply_count}/{item.visit_count} 
                  </div>    
                  <div className={classes['pull-left']}>
                  <a class='topic_title' title={item.title}>
                      {item.title}
                    </a>
                  </div>
                    <div style={{position:'absolute', right: '5px', top: '3px'}}>
                      <img class='user_small_avatar' src={item.author.avatar_url} width='30' height='30' />
                      <span class='last_active_time'>{item.author.loginname}</span>
                    </div>
                </div>
                </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})
export default connect((mapStateToProps), {})(contentList)
