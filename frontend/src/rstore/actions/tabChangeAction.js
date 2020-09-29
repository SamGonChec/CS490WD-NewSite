import types from "../constants/action-types";

export function renderHomePage() {
  return { type: types.RENDER_HOME}
};
export function renderAboutPage() {
  return { type: types.RENDER_ABOUT}
};
export function renderServicesPage() {
  return { type: types.RENDER_SERVICES}
};
export function renderDoctorsPage() {
  return { type: types.RENDER_DOCTORS}
};