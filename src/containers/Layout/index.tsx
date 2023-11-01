import { useCallback } from 'react'
import {
  Outlet,
  useNavigation,
  type Location,
  type useMatches,
  ScrollRestoration
} from 'react-router-dom';
import 'twin.macro';
import Navigation from '../Navigation'
import Footer from '../Footer';

const Layout = () => {
  const navigation = useNavigation();
  const getKey = useCallback(
    (location: Location, matches: ReturnType<typeof useMatches>) => {
      const match = matches.find((m) => (m.handle as any)?.scrollMode);
      if ((match?.handle as any)?.scrollMode === "pathname") {
        return location.pathname;
      }
      return location.key;
    },
    []
  );

  return (
    <>

      <div
        className="spinner"
        style={{
          display: navigation.state === "idle" ? "none" : "block",
        }}
      >
        Navigating...
      </div>

      <Navigation />
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={getKey} />
    </>
  )
}
export default Layout;
