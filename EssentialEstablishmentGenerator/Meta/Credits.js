import { PatreonSupporters } from './PatreonSupporters'
import { Contributors } from './Contributors'

export function Credits () {
  return `\
Many thanks to /u/FamousHippopotamus and /u/OrkishBlade for their excellent tables and DMing advice over the years. Shoutout to /r/twinegames and the good folks in the Discord server who helped a total newb learn how to code in Twine. This software is provided on an as-is basis, and no warranty or guarantee that it works is provided.

This is still in development. If you have any bug reports, suggestions, or submissions (in desperate need of more plot hooks!), please [[click here.|https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/issues/]]

If you'd like to contribute to the development, the project is hosted on [[GitHub.|https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator]]

If you enjoy this, please consider supporting me on [[Patreon|https://www.patreon.com/user?u=399997]]

We have a [[subreddit!|www.reddit.com/r/EigengrausGenerator]]

[[Sign up to the newsletter to be notified about updates|EmailSignUp]]

<strong>Version: $versionNumber</strong>

<<linkappend "Changelog">>
<<include "Changelog">><</linkappend>>
${PatreonSupporters()}
${Contributors()}
  `
}
