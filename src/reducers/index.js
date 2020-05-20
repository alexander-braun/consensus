import { combineReducers } from 'redux'
import { videoTitle } from './videoTitle'
import { sentiment } from './sentiment'
import { keyCounts } from './keyCounts'
import { comments } from './comments'
import { highestAndLowestCommentCount } from './highestAndLowestCommentCount'
import { singleWordSentiments } from './singleWordSentiments'
import { countries } from './countries'
import { choice } from './choice'

export default combineReducers({
    videoTitle,
    sentiment,
    keyCounts,
    comments,
    highestAndLowestCommentCount,
    singleWordSentiments,
    countries,
    choice
})