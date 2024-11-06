use crate::*;

pub fn init_instruction(ctx: Context<InitVote>) -> Result<()> {
    ctx.accounts.vote_account.is_open_to_vote = true;
    Ok(())
}

#[derive(Accounts)]
pub struct InitVote<'info> {
    // Making a global account for storing votes
    #[account(
        init,
        payer = signer,
        space = 8 + 1 + 8 + 8,
    )]
    pub vote_account: Account<'info, VoteBank>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
#[derive(Default)]
pub struct VoteBank {
    is_open_to_vote: bool,
    pub gm: u64,
    pub gn: u64,
}
