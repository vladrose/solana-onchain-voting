use super::init_instruction::VoteBank;
use crate::*;

pub fn vote_instruction(ctx: Context<Vote>, vote_type: VoteType) -> Result<()> {
    // If vote_type is GM increment GM by 1 else increment GN by 1
    match vote_type {
        VoteType::GM => {
            msg!("Voted for GM 🤝");
            ctx.accounts.vote_account.gm += 1;
        }
        VoteType::GN => {
            msg!("Voted for GN 🤞");
            ctx.accounts.vote_account.gn += 1;
        }
    };
    Ok(())
}

#[derive(Accounts)]
pub struct Vote<'info> {
    // we are going to store users vote in this account. Hence, marking it as mutable(mut),
    #[account(mut)]
    pub vote_account: Account<'info, VoteBank>,
    pub signer: Signer<'info>,
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub enum VoteType {
    GM,
    GN,
}
