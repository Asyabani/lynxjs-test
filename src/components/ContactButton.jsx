export function ContactButton() {
    return (
      <view
        className="ContactButton"
        bindtap={() => {
          console.log('Contact Us clicked')
        }}
      >
        <text>Contact Us</text>
      </view>
    )
  }
  