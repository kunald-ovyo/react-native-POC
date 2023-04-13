export interface Root {
  header: Header;
  data: Daum[];
}

export interface Header {
  source: string;
  code: number;
  message: string;
  system_time: number;
  tracking_id: string;
  start: number;
  rows: number;
  count: number;
}

export interface Daum {
  appliesif: Appliesif;
  cd?: Cd[];
  click_action: string;
  con_tg: string;
  diar: Diar2[];
  ed_dt: string;
  edit: boolean;
  i: I2[];
  iar: string;
  id: string;
  lo: string;
  logo_overlay: LogoOverlay2;
  lon: Lon6[];
  s: string;
  scroll_style: ScrollStyle2;
  st_dt: string;
  stl: string;
  tag_overlay: TagOverlay2;
  text_style: TextStyle2;
  urn: string;
}

export interface Appliesif {
  acl: string[];
  dt: string[];
  reg: string[];
}

export interface Cd {
  acl?: string;
  ad?: string;
  adv?: string[];
  ao?: string;
  aq?: string;
  ct: string;
  cty?: string;
  ed_dt: string;
  ent?: Ent[];
  ex_id?: string;
  fp?: Fp;
  ia: string[];
  id: string;
  locs?: Loc[];
  lod: Lod[];
  lodr?: Lodr[];
  log?: Log[];
  lok?: Lok[];
  lon: Lon3[];
  lwe?: string;
  lws?: string;
  mar?: Mar[];
  net?: string;
  nu: string;
  pe?: string;
  ph?: Ph[];
  pn?: string;
  r?: number;
  rat?: Rat[];
  rt?: number;
  st: string;
  st_dt: string;
  tids?: string[];
  urn: string;
  ut: string;
  v_sm?: VSm;
  vq?: string;
  dfs?: Df[];
  tg?: string[];
  epnum?: number;
  losetl?: Losetl[];
  lostl?: Lostl[];
  setl_id?: string;
  snum?: number;
  stl_id?: string;
  oadt?: string;
  appliesif?: Appliesif2;
  bgc?: string;
  c?: C[];
  c_lo?: string;
  key?: string;
  lold?: Lold[];
  seo?: Seo;
  ty?: string;
  url?: string;
  priority?: number;
  type?: string;
}

export interface Ent {
  con: string;
  det: string;
  dt: string;
  f_ed_dt: string;
  f_st_dt: string;
  sp?: string[];
}

export interface Fp {
  fp_ed: number;
  fp_st: number;
}

export interface Loc {
  ia: string[];
  id: string;
  lon: Lon[];
}

export interface Lon {
  lang: string;
  n: string;
}

export interface Lod {
  lang: string;
  n: string;
}

export interface Lodr {
  ia?: string[];
  id?: string;
  lon: Lon2[];
}

export interface Lon2 {
  lang: string;
  n: string;
}

export interface Log {
  lang: string;
  n: string[];
}

export interface Lok {
  lang: string;
  n: string[];
}

export interface Lon3 {
  lang: string;
  n: string;
}

export interface Mar {
  m_ed: number;
  m_st: number;
  t: string;
}

export interface Ph {
  lang: string;
  n: string[];
}

export interface Rat {
  cc: string;
  s: string;
  v: string;
}

export interface VSm {
  locd: Locd[];
  ff?: string;
  rs?: string;
}

export interface Locd {
  d: string;
  lang: string;
  n: string;
  tags: string[];
}

export interface Df {
  fs: number;
  q: string;
}

export interface Losetl {
  lang: string;
  n: string;
}

export interface Lostl {
  lang: string;
  n: string;
}

export interface Appliesif2 {
  acl: string[];
  dt: string[];
  reg: string[];
}

export interface C {
  appliesif: Appliesif3;
  click_action: string;
  con_tg: string;
  diar: Diar[];
  ed_dt: string;
  edit: boolean;
  i: I[];
  iar: string;
  id: string;
  lang?: string;
  lo: string;
  logo_overlay: LogoOverlay;
  lon: Lon4[];
  n?: N[];
  s: string;
  scroll_style: ScrollStyle;
  st_dt: string;
  stl: string;
  tag_overlay: TagOverlay;
  text_style: TextStyle;
  urn: string;
}

export interface Appliesif3 {
  acl: string[];
  dt: string[];
  reg: string[];
}

export interface Diar {
  dt: string;
  iar: string;
}

export interface I {
  cu: string;
  priority: number;
  q: string;
  type: string;
}

export interface LogoOverlay {
  enable: string;
  image_name: string;
  position: string;
  transparency: number;
}

export interface Lon4 {
  lang: string;
  n: string;
}

export interface N {
  lang: string;
  n: string;
}

export interface ScrollStyle {
  autoplay: string;
  direction: string;
  loop: string;
  type: string;
}

export interface TagOverlay {
  enable: string;
  position: string;
  tag_name: string;
  transparency: number;
}

export interface TextStyle {
  font_size: string;
  font_stretch: string;
  font_style: string;
  font_weight: string;
  position: string;
  text_overlay: string;
  transparency: number;
}

export interface Lold {
  lang: string;
  n: string;
}

export interface Seo {
  cau: string;
  iu: string;
  lod: Lod2[];
  lok: Lok2[];
  lon: Lon5[];
  og: Og;
  pu: string;
}

export interface Lod2 {
  lang: string;
  n: string;
}

export interface Lok2 {
  lang: string;
  n: string[];
}

export interface Lon5 {
  lang: string;
  n: string;
}

export interface Og {
  sn: string;
  ty: string;
}

export interface Diar2 {
  dt: string;
  iar: string;
}

export interface I2 {
  count: number;
  cu: string;
  priority: number;
  type: string;
}

export interface LogoOverlay2 {
  enable: string;
  image_name: string;
  position: string;
  transparency: number;
}

export interface Lon6 {
  lang: string;
  n: string;
}

export interface ScrollStyle2 {
  autoplay: string;
  direction: string;
  loop: string;
  type: string;
}

export interface TagOverlay2 {
  enable: string;
  position: string;
  tag_name: string;
  transparency: number;
}

export interface TextStyle2 {
  font_size: string;
  font_stretch: string;
  font_style: string;
  font_weight: string;
  position: string;
  text_overlay: string;
  transparency: number;
}
