import ArticleIcon from '../../icons/article.svg?react'
import CalendarIcon from '../../icons/calendar.svg?react'
import ChevronDownIcon from '../../icons/chevron-down.svg?react'
import ChevronLeftIcon from '../../icons/chevron-left.svg?react'
import ChevronRightIcon from '../../icons/chevron-right.svg?react'
import ChevronUpIcon from '../../icons/chevron-up.svg?react'
import CloseIcon from '../../icons/close.svg?react'
import ConfirmIcon from '../../icons/confirm.svg?react'
import DownloadIcon from '../../icons/download.svg?react'
import ErrorIcon from '../../icons/error.svg?react'
import FileIcon from '../../icons/file.svg?react'
import HelpIcon from '../../icons/help.svg?react'
import HomeIcon from '../../icons/home.svg?react'
import ImageIcon from '../../icons/image.svg?react'
import InfoIcon from '../../icons/info.svg?react'
import LanguageIcon from '../../icons/language.svg?react'
import LinkIcon from '../../icons/link.svg?react'
import LocationIcon from '../../icons/location.svg?react'
import MenuIcon from '../../icons/menu.svg?react'
import OpenIcon from '../../icons/open.svg?react'
import SearchIcon from '../../icons/search.svg?react'
import ShareIcon from '../../icons/share.svg?react'
import VerifiedIcon from '../../icons/verified.svg?react'
import VideoIcon from '../../icons/video.svg?react'
import WarningIcon from '../../icons/warning.svg?react'

const icons = [
  { name: 'article', Component: ArticleIcon },
  { name: 'calendar', Component: CalendarIcon },
  { name: 'chevron-down', Component: ChevronDownIcon },
  { name: 'chevron-left', Component: ChevronLeftIcon },
  { name: 'chevron-right', Component: ChevronRightIcon },
  { name: 'chevron-up', Component: ChevronUpIcon },
  { name: 'close', Component: CloseIcon },
  { name: 'confirm', Component: ConfirmIcon },
  { name: 'download', Component: DownloadIcon },
  { name: 'error', Component: ErrorIcon },
  { name: 'file', Component: FileIcon },
  { name: 'help', Component: HelpIcon },
  { name: 'home', Component: HomeIcon },
  { name: 'image', Component: ImageIcon },
  { name: 'info', Component: InfoIcon },
  { name: 'language', Component: LanguageIcon },
  { name: 'link', Component: LinkIcon },
  { name: 'location', Component: LocationIcon },
  { name: 'menu', Component: MenuIcon },
  { name: 'open', Component: OpenIcon },
  { name: 'search', Component: SearchIcon },
  { name: 'share', Component: ShareIcon },
  { name: 'verified', Component: VerifiedIcon },
  { name: 'video', Component: VideoIcon },
  { name: 'warning', Component: WarningIcon },
]

const IconLibrary = () => (
  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
    {icons.map(({ name, Component }) => (
      <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <Component width={24} height={24} />
        <span style={{ fontSize: 11, color: '#6B7280' }}>{name}</span>
      </div>
    ))}
  </div>
)

export default IconLibrary