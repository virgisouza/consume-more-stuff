export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS';
export const UPLOAD_DOCUMENT_FAIL = 'UPLOAD_DOCUMENT_FAIL';


export function uploadSuccess({data}) {
  return {
    type: UPLOAD_DOCUMENT_SUCCESS,
    data: data
  }
}

export function uploadFail(error) {
  return {
    type: UPLOAD_DOCUMENT_FAIL,
    error: error
  }
}