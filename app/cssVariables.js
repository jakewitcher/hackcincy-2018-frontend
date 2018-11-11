// color namer -> http://chir.ag/projects/name-that-color

export const colors = {
  FIORD: '#3B4D68',
  OXFORD_BLUE: '#344256',
  TITAN_BLUE: '#FDFDFF',
  ALTO: '#D9D9D9',
  MOON_RAKER: '#DAE0F9',
  PIZAZZ: '#ff8800',
  ORANGE: '#FF8800',
};

export default Object.assign({}, colors, {
  CLR_FIORD: colors.FIORD,
  CLR_OXFORD_BLUE: colors.OXFORD_BLUE,
  CLR_TITAN_BLUE: colors.TITAN_BLUE,
  CLR_ALTO: colors.ALTO,
  CLR_MOON_RAKER: colors.MOON_RAKER,
  CLR_PIZAZZ: colors.PIZAZZ,
  CLR_INFO: colors.FIORD,
  CLR_PRIMARY_BG: colors.FIORD,
  CLR_SECONDARY_BG: colors.TITAN_BLUE,
  CLR_PRIMARY_BORDER_COLOR: colors.ALTO,
  CLR_SECONDARY_BORDER_COLOR: colors.OXFORD_BLUE,

  BORDER_RADIUS: '0.8rem',
  BORDER_RADIUS_SM: '0.4rem',
  BOX_SHADOW: '0 18px 35px rgba(50,50,93,.1), 0 8px 15px rgba(0,0,0,.07)',
  BOX_SHADOW_SM: '0 6px 20px rgba(50,50,93,.1), 0 4px 15px rgba(0,0,0,.07)',
  // BOX_SHADOW: `0 0 27px 4px ${colors.MOON_RAKER}`,
});
