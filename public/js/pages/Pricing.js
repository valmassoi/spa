import React, { Component } from 'react'

class Pricing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      billingCycle: 'annually',
    }
  }

  setBilling(billingCycle) {
    this.setState({ billingCycle })
  }

  render() {
    const { billingCycle } = this.state
    const billingIsAnnually = billingCycle === 'annually' ? 'active' : ''
    const billingIsMonthly = billingCycle === 'monthly' ? 'active' : ''

    const tiers = [
      {
        type: 'good',
        cost: 25.23,
        features: ['feat1', 'feat2', 'feat3'],
      },
      {
        type: 'better',
        cost: 50,
        features: ['feat1', 'feat2', 'feat3'],
      },
      {
        type: 'best',
        cost: 75,
        features: ['feat1', 'feat2', 'feat3', 'feat4'],
      },
    ]

    return (
      <div>
        <h1 class="center-text">PRICING</h1>
        <ul class="nav nav-pills" id="billing">
          <li class={billingIsMonthly} onClick={() => this.setBilling('monthly')}>
            <a>MONTHLY</a>
          </li>
          <li class={billingIsAnnually} onClick={() => this.setBilling('annually')}>
            <a>ANNUALLY</a>
          </li>
        </ul>
        <div class="row tiers-container centered">
        {tiers.map((tier, i) => {
          return (
            <div key={`${tier.type}-${i}`} class="col-sm-4 tier-container">
              <h3 id="tier" class="center-text">{tier.type.toUpperCase()}</h3>
              <div class="center-text">
                <i class="fa fa-usd" aria-hidden="true"></i>
                <span id="cost">
                  {billingIsAnnually ? Math.round(tier.cost) : Math.round(tier.cost * 1.2)}
                </span>/mo
              </div>
              <p class="center-text">{billingIsAnnually ? '(billed annually)' : ''}</p>
              {tier.features.map((feature, j) => {
                return (
                  <p key={`${tier.type}-feat-${j}`}>
                    <i class="fa fa-check" aria-hidden="true"></i> {feature}
                  </p>
                )
              })}
              <button class="btn" id="free-trial">Free Trial</button>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

export default Pricing
