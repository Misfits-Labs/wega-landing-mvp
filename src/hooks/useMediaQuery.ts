import { isMobileMediaQeury } from '../models/constants'
import { useMedia } from 'react-use'

export function useMediaQuery() {
 const isMobile = useMedia(isMobileMediaQeury);
 return { isMobile }
} 

