
export const ENTER_MOVE = 'actions/ENTER_MOVE';
export const LOGIN = 'actions/LOGIN';
export const TO_SIGNIN = 'action/TO_SIGNIN'
export const SYNC_PSEUDO = 'actions/SYNC_PSEUDO';
export const SYNC_EMAIL = 'actions/SYNC_EMAIL';
export const SYNC_PASSWORD = 'actions/SYNC_PASSWORD';
export const SYNC_PASSWORDVAL = 'actions/SYNC_PASSWORDVAL';
export const SYNC_OLDPASSWORD = 'actions/SYNC_OLDPASSWORD';
export const SYNC_NEWPASSWORD = 'actions/SYNC_NEWPASSWORD';
export const SYNC_USER_ID = 'actions/SYNC_USER_ID';
export const SYNC_ISLOGGED = 'actions/SYNC_ISLOGGED';
export const SYNC_MOVES = 'actions/SYNC_MOVES';
export const SYNC_MOVE_ID_SELECTED = 'actions/SYNC_MOVE_ID_SELECTED';
export const SIGNUP = 'action/SIGNUP';
export const login = (history) => ({ type: LOGIN, history });
export const signup = (history) => ({ type: SIGNUP, history});
export const toSignin = (history) => ({ type: TO_SIGNIN, history})
export const enterMove = (history) => ({ type: ENTER_MOVE, history });
export const syncPseudo = (history) => ({ type: SYNC_PSEUDO, history });
export const syncMoves = (history) => ({ type: SYNC_MOVES, history });
export const syncMoveIdSelected = (history) => ({ type : SYNC_MOVE_ID_SELECTED, history});

