// Define styling with OO version of css
const styles = {
  // global styles for app
  universal : {

  },
  // comment component styles
  comment: {
    commentBox: {
      padding:12,
      background:'#f9f9f9',
      border:'1px solid #ddd',
      body: {
        fontSize:20,
        fontWeight:400
      },
      pipe: {
        fontWeight:200,
        marginLeft:12,
        marginRight:12
      },
      commentFooter: {
        fontWeight: 200
      }
    },
    commentsList: {
      listStyleType: 'none'
    }
  },
  // zone component styles
  zone: {
    container: {
      padding:16,
      background: '#f9f9f9',
      marginTop: 12,
      border: '1px solid #ddd'
    },
    header: {
      maginBottom:0
    },
    title: {
      textDecoration: 'none',
      color: 'red'
    }
  } // end of zone styling
}

//es6 way of export
export default styles
