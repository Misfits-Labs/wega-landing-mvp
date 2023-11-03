import { useCallback } from 'react';
import { NavigationMobile } from '../NavigationMobile';
import {
  Outlet,
  useNavigation,
  type Location,
  type useMatches,
  ScrollRestoration
} from 'react-router-dom';
import 'twin.macro';
import Navigation from '../Navigation'
import { useMediaQuery } from '../../hooks';
import Footer from '../Footer';


const Layout = () => {
  const navigation = useNavigation();
  const { isMobile } = useMediaQuery();
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
      { isMobile ? <NavigationMobile /> : <Navigation /> }
        <Outlet />
      <Footer />
      <ScrollRestoration getKey={getKey} />
      <div id="wega-overlay" tw="absolute top-[-10rem] h-[450vh] w-full bg-pretu bg-opacity-60 z-[701] hidden"></div>
    </>
  )
}
export default Layout;
