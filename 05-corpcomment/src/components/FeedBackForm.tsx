export function FeedBackForm() {
  return (
    <form className='form'>
      <textarea id='feedback-textarea' placeholder='...' />
      <label htmlFor='feedback-textarea'>Enter your Feedback here!</label>
      <div>
        <p className='u-italic'>150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
